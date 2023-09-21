package com.jeeva.service.impl;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.model.FactData;
import com.jeeva.model.Shortfacts;
import com.jeeva.repository.ShortfactsRepository;
import com.jeeva.service.ShortfactsService;

@Service
public class ShortfactsServiceImpl implements ShortfactsService
{

	@Autowired
	private ShortfactsRepository shortfactRepository;

	@Override
	public Shortfacts createShortfact(FactData fact) throws IOException
	{
		Shortfacts shortfact = new Shortfacts();
		shortfact.setShortfactData(fact);
		return shortfactRepository.save(shortfact);
	}

	@Override
	public void updateShortfact(Shortfacts shortfact)
	{
		shortfactRepository.save(shortfact);
	}
	
	@Override
	public Shortfacts getShortfact(int id)
	{
		Optional<Shortfacts> optional = shortfactRepository.findById(id);
		Shortfacts shortfact = new Shortfacts();
		shortfact.setShortFact(optional.get());
		return shortfact;
		
	}

	@Override
	public List<Shortfacts> getShortfacts()
	{
		return (List<Shortfacts>)shortfactRepository.findAll();
	}

	@Override
	public void deleteShortfact(int id)
	{
		shortfactRepository.deleteById(id);
	}

	@Override
	public boolean isShortfactExist(int id)
	{
		return shortfactRepository.existsById(id);
	}
}
