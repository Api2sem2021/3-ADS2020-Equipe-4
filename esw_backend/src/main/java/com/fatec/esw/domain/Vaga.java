package com.fatec.esw.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vaga implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String descricaoBreve;
	private String descricaoDetalhada;
	private String requisitos;
	private String observacoes;
	private String data;//Modificar para data
	
	public Vaga() {

	}

	public Vaga(Long id, String nome, String descricaoBreve, String descricaoDetalhada, String requisitos,
			String observações, String data) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricaoBreve = descricaoBreve;
		this.descricaoDetalhada = descricaoDetalhada;
		this.requisitos = requisitos;
		this.observacoes = observações;
		this.data = data;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricaoBreve() {
		return descricaoBreve;
	}

	public void setDescricaoBreve(String descricaoBreve) {
		this.descricaoBreve = descricaoBreve;
	}

	public String getDescricaoDetalhada() {
		return descricaoDetalhada;
	}

	public void setDescricaoDetalhada(String descricaoDetalhada) {
		this.descricaoDetalhada = descricaoDetalhada;
	}

	public String getRequisitos() {
		return requisitos;
	}

	public void setRequisitos(String requisitos) {
		this.requisitos = requisitos;
	}

	public String getObservações() {
		return observacoes;
	}

	public void setObservações(String observações) {
		this.observacoes = observações;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
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
		Vaga other = (Vaga) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	
}
