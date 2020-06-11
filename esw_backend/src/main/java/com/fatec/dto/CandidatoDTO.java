package com.fatec.dto;

import java.util.List;

import com.fatec.esw.domain.Candidato;
import com.sun.istack.NotNull;

public class CandidatoDTO {

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
	private String facebook; 
	@NotNull
	private String linkedin; 
	@NotNull
	private String marcadores;
	
	private List<Long> vagas;
	
	public CandidatoDTO(Candidato candidato) {
		
	}
	


	public CandidatoDTO(String cpf, String email, String nome, String telefone, String curriculo, String facebook,
			String linkedin) {
		this.cpf = cpf;
		this.email = email;
		this.nome = nome;
		this.telefone = telefone;
		this.curriculo = curriculo;
		this.facebook = facebook;
		this.linkedin = linkedin;
	}



	public Candidato inserirEntidade(CandidatoDTO candidatoDTO) {
		return new Candidato(cpf,email,nome,telefone,curriculo,facebook,linkedin);
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

	public String getFacebook() {
		return facebook;
	}

	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}

	public String getLinkedin() {
		return linkedin;
	}

	public void setLinkedin(String linkedin) {
		this.linkedin = linkedin;
	}

	public String getMarcadores() {
		return marcadores;
	}

	public void setMarcadores(String marcadores) {
		this.marcadores = marcadores;
	}
	
	
}
