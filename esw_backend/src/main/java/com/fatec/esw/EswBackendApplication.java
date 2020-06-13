package com.fatec.esw;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fatec.esw.domain.Candidato;
import com.fatec.esw.domain.Status;
import com.fatec.esw.domain.Vaga;
import com.fatec.esw.repositories.CandidatoRepository;
import com.fatec.esw.repositories.StatusRepository;
import com.fatec.esw.repositories.VagaRepository;

@SpringBootApplication
public class EswBackendApplication implements CommandLineRunner{

	@Autowired
	private CandidatoRepository candidatoRepository;
	@Autowired
	private StatusRepository statusRepository;
	@Autowired
	private VagaRepository vagaRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(EswBackendApplication.class, args);
	}

	//Command line runner executa uma ação quando o programa iniciar
	//Executa a instanciação no momento em que a aplicação inicia(Popula o banco)
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Status status1 = new Status(null, "A", "Aprovado");
		Status status2 = new Status(null, "E", "Em andamento");
		Status status3 = new Status(null, "R", "Reprovado");
		statusRepository.save(status1);
		statusRepository.save(status2);
		statusRepository.save(status3);
		Candidato candidato1 = new Candidato(null, "498.200.403-34", "qualquer@hotmail.com","Alfredo","988784004","A fazer",status1.getStatus(),"A fazer","linkFacebook","linkLinkedin");
		Candidato candidato2 = new Candidato(null, "123.456.789-00", "joelma123@hotmail.com","Joelma","988885888","A fazer",status2.getStatus(),"A fazer","linkFacebook","linkLinkedin");
		candidatoRepository.save(candidato1);
		candidatoRepository.save(candidato2);
		Vaga vaga1 = new Vaga(null,"Programador Junior Java","https://www.imagemConceitual.jpg","Programador java","Programador java com experiência no mercado","Java Intermediário","Carga horária de 8hrs p/dia, Salário 3.500,00 Reais","28/07/2020");
		Vaga vaga2 = new Vaga(null,"Estagiário C#","https://www.imagem.jpg","Estagiário C#","Conhecimento básico em C# ","C# Básico","Carga horária de 6hrs p/dia, Salário 1.050,00 Reais","28/11/2020");
		vagaRepository.save(vaga1);
		vagaRepository.save(vaga2);
	}

}
