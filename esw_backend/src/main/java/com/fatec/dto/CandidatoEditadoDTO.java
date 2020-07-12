package com.fatec.dto;

import java.util.List;

import com.fatec.esw.domain.Candidato;
import com.fatec.esw.domain.Vaga;
import com.sun.istack.NotNull;

public class CandidatoEditadoDTO {

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
	
	public CandidatoEditadoDTO(Candidato candidato) {
		
	}
	


	public CandidatoEditadoDTO(String cpf, String email, String nome, String telefone, String curriculo,
			String cargoAtual, String dataAdmissao, String marcadores, Boolean funcionario) {
		this.cpf = cpf;
		this.email = email;
		this.nome = nome;
		this.telefone = telefone;
		this.curriculo = curriculo;
		this.cargoAtual = cargoAtual;
		this.dataAdmissao = dataAdmissao;
		this.marcadores = marcadores;
		this.funcionario = funcionario;
	}



	public Candidato inserirEntidade(CandidatoEditadoDTO candidatoEditadoDTO) {
		return new Candidato(id, cpf, email, nome, telefone, curriculo, status, marcadores, cargoAtual, dataAdmissao, funcionario, vagas);
		
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

	
	public String getCargoAtual() {
		return cargoAtual;
	}



	public void setCargoAtual(String cargoAtual) {
		this.cargoAtual = cargoAtual;
	}



	public String getDataAdmissao() {
		return dataAdmissao;
	}



	public void setDataAdmissao(String dataAdmissao) {
		this.dataAdmissao = dataAdmissao;
	}



	public List<Vaga> getVagas() {
		return vagas;
	}

	public void setVagas(List<Vaga> vagas) {
		this.vagas = vagas;
	}



	public Boolean getFuncionario() {
		return funcionario;
	}



	public void setFuncionario(Boolean funcionario) {
		this.funcionario = funcionario;
	}
	
	
	
	
	
	
	
}
