package com.fatec.esw.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.dto.CandidatoDTO;
import com.fatec.dto.CandidatoEditadoDTO;
import com.fatec.dto.CandidatoFiltradoDTO;
import com.fatec.esw.domain.Candidato;
import com.fatec.esw.domain.Vaga;
import com.fatec.esw.repositories.CandidatoRepository;

@Service
public class CandidatoService {

	@Autowired //Anotação para instanciar automagicamente
	private CandidatoRepository candidatoRepository;
	
	@Autowired
	private EntityManager entity;
	
	//Objeto Optional é um objeto container que carrega um onjeto do tipo
	//informado e encapsula a questão do objeto estar encapsulado ou não
	public Candidato find(Long id) {
		Optional<Candidato> obj = candidatoRepository.findById(id);
		return obj.orElse(null);
	}
	
	public List<Candidato> findAll() {
		List<Candidato> listaCandidatos = candidatoRepository.findAll();
		return listaCandidatos;
	}
	
	public Candidato cadastrar(CandidatoDTO candidatoDTO) {

		Candidato candidato = candidatoDTO.inserirEntidade(candidatoDTO);
		
		candidato.setCpf(candidatoDTO.getCpf() != null ? candidatoDTO.getCpf() : null);
		candidato.setEmail(candidatoDTO.getEmail() != null ? candidatoDTO.getEmail() : null);
		candidato.setNome(candidatoDTO.getNome() != null ? candidatoDTO.getNome() : null);
		candidato.setTelefone(candidatoDTO.getTelefone() != null ? candidatoDTO.getTelefone() : null);
		candidato.setCurriculo(candidatoDTO.getCurriculo() != null ? candidatoDTO.getCurriculo() : null);
		candidatoRepository.save(candidato);
		return candidato;
	}
	
	public Candidato editar(CandidatoEditadoDTO candidatoEditadoDTO) {
		
		Candidato candidato = candidatoEditadoDTO.inserirEntidade(candidatoEditadoDTO);
		candidato.setId(candidatoEditadoDTO.getId() != null ? candidatoEditadoDTO.getId() : null);
		candidato.setCpf(candidatoEditadoDTO.getCpf() != null ? candidatoEditadoDTO.getCpf() : null);
		candidato.setEmail(candidatoEditadoDTO.getEmail() != null ? candidatoEditadoDTO.getEmail() : null);
		candidato.setNome(candidatoEditadoDTO.getNome() != null ? candidatoEditadoDTO.getNome() : null);
		candidato.setTelefone(candidatoEditadoDTO.getTelefone() != null ? candidatoEditadoDTO.getTelefone() : null);
		candidato.setCurriculo(candidatoEditadoDTO.getCurriculo() != null ? candidatoEditadoDTO.getCurriculo() : null);
		candidato.setCargoAtual(candidatoEditadoDTO.getCargoAtual() != null ? candidatoEditadoDTO.getCargoAtual(): null);
		candidato.setDataAdmissao(candidatoEditadoDTO.getDataAdmissao() != null ? candidatoEditadoDTO.getDataAdmissao(): null);
		candidato.setMarcadores(candidatoEditadoDTO.getMarcadores() != null ? candidatoEditadoDTO.getMarcadores(): null);
		candidato.setVagas(candidatoEditadoDTO.getVagas() != null ? candidatoEditadoDTO.getVagas(): null);

		candidato.setFuncionario(candidatoEditadoDTO.getFuncionario());
		candidatoRepository.save(candidato);
		return candidato;
	}
	
	public void delete(Long id) {
		candidatoRepository.deleteById(id);
	}
	
	public List<CandidatoFiltradoDTO> buscarCandidatoFiltrado(String cpf) {
		
		CriteriaBuilder builder = entity.getCriteriaBuilder();
		CriteriaQuery<CandidatoFiltradoDTO> query = builder.createQuery(CandidatoFiltradoDTO.class);
		Root<Candidato> candidato = query.from(Candidato.class);
		
		query.multiselect(candidato.get("cpf"), candidato.get("email"), candidato.get("nome"), candidato.get("telefone"), candidato.get("curriculo"),
				candidato.get("cargoAtual"), candidato.get("dataAdmissao"), candidato.get("marcadores"), candidato.get("funcionario"), candidato.get("id"),
				candidato.get("status"));
		
		List<javax.persistence.criteria.Predicate> predicateList = new ArrayList<>();
		
		
		if (cpf != null && !cpf.equals("")) {
			Path<String> cpfCandidato = candidato.get("cpf");
			predicateList.add(builder.equal(cpfCandidato, cpf));
		}
		
		javax.persistence.criteria.Predicate[] predicates = new javax.persistence.criteria.Predicate[predicateList.size()];
		predicateList.toArray(predicates);
		query.where(predicates);
		
		TypedQuery<CandidatoFiltradoDTO> typedQuery = entity.createQuery(query);
		List<CandidatoFiltradoDTO> lista = typedQuery.getResultList();

		return lista;

	}
	
public List<CandidatoFiltradoDTO> buscarListaCandidatosFiltrados(String nome, String cpf, String marcadores) {
		
		CriteriaBuilder builder = entity.getCriteriaBuilder();
		CriteriaQuery<CandidatoFiltradoDTO> query = builder.createQuery(CandidatoFiltradoDTO.class);
		Root<Candidato> candidato = query.from(Candidato.class);
		
		query.multiselect(candidato.get("cpf"), candidato.get("email"), candidato.get("nome"), candidato.get("telefone"), candidato.get("curriculo"),
				candidato.get("cargoAtual"), candidato.get("dataAdmissao"), candidato.get("marcadores"), candidato.get("funcionario"), candidato.get("id"),
				candidato.get("status"));
		
		List<javax.persistence.criteria.Predicate> predicateList = new ArrayList<>();
		
		
		if (cpf != null && !cpf.equals("")) {
			Path<String> cpfCandidato = candidato.get("cpf");
			predicateList.add(builder.equal(cpfCandidato, cpf));
		}
		
		if (nome != null && !nome.equals("")) {
			Path<String> nomeCandidato = candidato.get("nome");
			predicateList.add(builder.like(builder.lower(nomeCandidato), "%" + nome.toLowerCase()+ "%"));
		}
		
		if (marcadores != null && !marcadores.equals("")) {
			Path<String> marcadoresCandidato = candidato.get("marcadores");
			predicateList.add(builder.like(builder.lower(marcadoresCandidato), "%" +  marcadores.toLowerCase() + "%"));
		}
		
		javax.persistence.criteria.Predicate[] predicates = new javax.persistence.criteria.Predicate[predicateList.size()];
		predicateList.toArray(predicates);
		query.where(predicates);
		
		TypedQuery<CandidatoFiltradoDTO> typedQuery = entity.createQuery(query);
		List<CandidatoFiltradoDTO> lista = typedQuery.getResultList();

		return lista;

	}

//	public Candidato cadastrarNaVaga(CandidatoEditadoDTO candidatoEditadoDTO) {
//	
//	Candidato candidato = candidatoEditadoDTO.inserirEntidade(candidatoEditadoDTO);
//	candidato.setId(candidatoEditadoDTO.getId() != null ? candidatoEditadoDTO.getId() : null);
//	candidato.setCpf(candidatoEditadoDTO.getCpf() != null ? candidatoEditadoDTO.getCpf() : null);
//	candidato.setEmail(candidatoEditadoDTO.getEmail() != null ? candidatoEditadoDTO.getEmail() : null);
//	candidato.setNome(candidatoEditadoDTO.getNome() != null ? candidatoEditadoDTO.getNome() : null);
//	candidato.setTelefone(candidatoEditadoDTO.getTelefone() != null ? candidatoEditadoDTO.getTelefone() : null);
//	candidato.setCurriculo(candidatoEditadoDTO.getCurriculo() != null ? candidatoEditadoDTO.getCurriculo() : null);
//	candidato.setCargoAtual(candidatoEditadoDTO.getCargoAtual() != null ? candidatoEditadoDTO.getCargoAtual(): null);
//	candidato.setDataAdmissao(candidatoEditadoDTO.getDataAdmissao() != null ? candidatoEditadoDTO.getDataAdmissao(): null);
//	candidato.setMarcadores(candidatoEditadoDTO.getMarcadores() != null ? candidatoEditadoDTO.getMarcadores(): null);
//	candidato.setVagas(candidatoEditadoDTO.getVagas() != null ? candidatoEditadoDTO.getVagas(): null);
//
//	candidato.setFuncionario(candidatoEditadoDTO.getFuncionario());
//	candidatoRepository.save(candidato);
//	return candidato;
//}



}
