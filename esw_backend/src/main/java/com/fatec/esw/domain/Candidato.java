package com.fatec.esw.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Candidato implements Serializable{


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String cpf;
	private String email;
	private String nome;
	private String telefone;
	private String curriculo;
	private String status; 
	private String marcadores;
	
	@ManyToMany(fetch= FetchType.LAZY)
	@JoinTable(
	        name = "vaga_candidato",
	        joinColumns = { @JoinColumn(name = "candidato") },
	        inverseJoinColumns = { @JoinColumn(name = "vaga") } )
	private List<Vaga> vagas;
		
	public Candidato() {
		
	}

	public Candidato(Long id, String cpf, String email, String nome, String telefone, String curriculo, String status,
			String marcadores) {
		super();
		this.id = id;
		this.cpf = cpf;
		this.email = email;
		this.nome = nome;
		this.telefone = telefone;
		this.curriculo = curriculo;
		this.status = status;
		this.marcadores = marcadores;
	}
	
	public Candidato(String cpf, String email, String nome, String telefone, String curriculo) {
		super();
		this.cpf = cpf;
		this.email = email;
		this.nome = nome;
		this.telefone = telefone;
		this.curriculo = curriculo;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Candidato other = (Candidato) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
}
