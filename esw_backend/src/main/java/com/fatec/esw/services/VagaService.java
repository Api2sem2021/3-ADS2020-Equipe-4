package com.fatec.esw.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.dto.CandidatoEditadoDTO;
import com.fatec.dto.VagaDTO;
import com.fatec.esw.domain.Candidato;
import com.fatec.esw.domain.Vaga;
import com.fatec.esw.repositories.VagaRepository;

@Service
public class VagaService {

	@Autowired //Anotação para instanciar automagicamente
	private VagaRepository vagaRepository;
	
	//Objeto Optional é um objeto container que carrega um onjeto do tipo
	//informado e encapsula a questão do objeto estar encapsulado ou não
	public Vaga find(Long id) {
		Optional<Vaga> obj = vagaRepository.findById(id);
		return obj.orElse(null);
	}
	
	public List<Vaga> findAll() {
		List<Vaga> listaVagas = vagaRepository.findAll();
		return listaVagas;
	}
	
	public Vaga cadastrar(VagaDTO vagaDTO) {

		Vaga vaga = vagaDTO.inserirEntidade(vagaDTO);
		
		vaga.setNome(vagaDTO.getNome() != null ? vagaDTO.getNome() : null);
		vaga.setObservações(vagaDTO.getObservações() != null ? vagaDTO.getObservações() : null);
		vaga.setRequisitos(vagaDTO.getRequisitos() != null ? vagaDTO.getRequisitos() : null);
		vaga.setDescricaoDetalhada(vagaDTO.getDescricaoDetalhada() != null ? vagaDTO.getDescricaoDetalhada() : null);
		vaga.setDescricaoBreve(vagaDTO.getDescricaoBreve() != null ? vagaDTO.getDescricaoBreve() : null);
		vaga.setData(vagaDTO.getData() != null ? vagaDTO.getData() : null);
		vagaRepository.save(vaga);
		return vaga;
	}
	
public Vaga editar(VagaDTO vagaDTO) {
		
	Vaga vaga = vagaDTO.inserirEntidade(vagaDTO);
	
	vaga.setId(vagaDTO.getId() != null ? vagaDTO.getId() : null);
	vaga.setNome(vagaDTO.getNome() != null ? vagaDTO.getNome() : null);
	vaga.setObservações(vagaDTO.getObservações() != null ? vagaDTO.getObservações() : null);
	vaga.setRequisitos(vagaDTO.getRequisitos() != null ? vagaDTO.getRequisitos() : null);
	vaga.setDescricaoDetalhada(vagaDTO.getDescricaoDetalhada() != null ? vagaDTO.getDescricaoDetalhada() : null);
	vaga.setDescricaoBreve(vagaDTO.getDescricaoBreve() != null ? vagaDTO.getDescricaoBreve() : null);
	vaga.setData(vagaDTO.getData() != null ? vagaDTO.getData() : null);
	vagaRepository.save(vaga);
	return vaga;
	
	}
}
