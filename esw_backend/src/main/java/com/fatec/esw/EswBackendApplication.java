package com.fatec.esw;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fatec.esw.domain.Candidato;
import com.fatec.esw.repositories.CandidatoRepository;

@SpringBootApplication
public class EswBackendApplication implements CommandLineRunner{

	@Autowired
	private CandidatoRepository candidatoRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(EswBackendApplication.class, args);
	}

	//Command line runner executa uma ação quando o programa iniciar
	//Executa a instanciação no momento em que a aplicação inicia(Popula o banco)
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Candidato candidato1 = new Candidato(null, "498.200.403-34", "qualquer@hotmail.com","Alfredo","988784004","A fazer","A fazer","linkFacebook","linkLinkedin");
		Candidato candidato2 = new Candidato(null, "123.456.789-00", "joelma123@hotmail.com","Joelma","988885888","A fazer","A fazer","linkFacebook","linkLinkedin");
		candidatoRepository.save(candidato1);
		candidatoRepository.save(candidato2);
		
	}

}
