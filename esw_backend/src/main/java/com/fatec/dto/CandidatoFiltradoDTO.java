package com.fatec.dto;

import java.util.List;

import com.fatec.esw.domain.Candidato;
import com.fatec.esw.domain.Vaga;
import com.sun.istack.NotNull;

public class CandidatoFiltradoDTO {

	private Long id;
	
	@NotNull
	private String cpf;
	@NotNull
	private String email;
	@NotNull
	private String nome;
	@NotNull
	private String telefone;
	@NotNull
	private String curriculo;
	@NotNull
	private String status; 
	@NotNull
	private String marcadores;
	@NotNull
	private String cargoAtual;
	@NotNull
	private String dataAdmissao;
	@NotNull
	private Boolean funcionario;
		
	private List<Vaga> vagas;
	
	public CandidatoFiltradoDTO(Candidato candidato) {
		
	}
	


//	public CandidatoFiltradoDTO(String cpf, String email, String nome, String telefone, String curriculo,
//			String cargoAtual, String dataAdmissao, String marcadores, Boolean funcionario, Long id, String status, List<Vaga> vagas) {
//		this.cpf = cpf;
//		this.email = email;
//		this.nome = nome;
//		this.telefone = telefone;
//		this.curriculo = curriculo;
//		this.cargoAtual = cargoAtual;
//		this.dataAdmissao = dataAdmissao;
//		this.marcadores = marcadores;
//		this.funcionario = funcionario;
//		this.status = status;
//		this.vagas = vagas;
//		this.id = id;
//	}
	
	public CandidatoFiltradoDTO(String cpf, String email, String nome, String telefone, String curriculo,
			String cargoAtual, String dataAdmissao, String marcadores, Boolean funcionario, Long id, String status) {
		this.cpf = cpf;
		this.email = email;
		this.nome = nome;
		this.telefone = telefone;
		this.curriculo = curriculo;
		this.cargoAtual = cargoAtual;
		this.dataAdmissao = dataAdmissao;
		this.marcadores = marcadores;
		this.funcionario = funcionario;
		this.status = status;
		this.id = id;
	}
	
	
	



	public CandidatoFiltradoDTO(String cpf) {

		this.cpf = cpf;
	}



	public Candidato inserirEntidade(CandidatoFiltradoDTO candidatoDTO) {
		return new Candidato(cpf,email,nome,telefone,curriculo);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCurriculo() {
		return curriculo;
	}

	public void setCurriculo(String curriculo) {
		this.curriculo = curriculo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMarcadores() {
		return marcadores;
	}

	public void setMarcadores(String marcadores) {
		this.marcadores = marcadores;
	}
	
	



	public List<Vaga> getVagas() {
		return vagas;
	}



	public void setVagas(List<Vaga> vagas) {
		this.vagas = vagas;
	}
	
	
}
