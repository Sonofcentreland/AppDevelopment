package com.jeeva.service;

import java.io.IOException;
import java.util.List;

import com.jeeva.model.FactData;
import com.jeeva.model.Shortfacts;

public interface ShortfactsService
{
	public abstract Shortfacts createShortfact(FactData shortfact) throws IOException;

	public abstract void updateShortfact(Shortfacts shortfact);
	
	public abstract Shortfacts getShortfact(int id);
	
	public abstract List<Shortfacts> getShortfacts();
	
	public abstract void deleteShortfact(int id);
	
	public abstract boolean isShortfactExist(int id);
}
