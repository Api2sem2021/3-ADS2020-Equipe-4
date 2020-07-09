package com.fatec.dto;

import com.fatec.esw.domain.Vaga;

public class VagaDTO {

	private Long id;
	private String nome;
	private String descricaoBreve;
	private String descricaoDetalhada;
	private String requisitos;
	private String observacoes;
	private String data;
	
	public VagaDTO(Vaga vaga) {
		
	}

	public VagaDTO(Long id, String nome, String descricaoBreve, String descricaoDetalhada, String requisitos,
			String observacoes, String data) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricaoBreve = descricaoBreve;
		this.descricaoDetalhada = descricaoDetalhada;
		this.requisitos = requisitos;
		this.observacoes = observacoes;
		this.data = data;
	}
	
	public Vaga inserirEntidade(VagaDTO vagaDTO) {
		return new Vaga(id, nome, descricaoBreve, descricaoDetalhada, requisitos, observacoes, data);
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
	
	
}
