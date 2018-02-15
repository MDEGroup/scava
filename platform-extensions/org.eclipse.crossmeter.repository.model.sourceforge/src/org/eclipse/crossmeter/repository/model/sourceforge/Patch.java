/*******************************************************************************
 * Copyright (c) 2017 University of L'Aquila
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
package org.eclipse.crossmeter.repository.model.sourceforge;

import com.googlecode.pongo.runtime.querying.*;


public class Patch extends Tracker {
	
	
	
	public Patch() { 
		super();
		super.setSuperTypes("org.eclipse.crossmeter.repository.model.sourceforge.Tracker","org.eclipse.crossmeter.repository.model.sourceforge.NamedElement");
		LOCATION.setOwningType("org.eclipse.crossmeter.repository.model.sourceforge.Patch");
		STATUS.setOwningType("org.eclipse.crossmeter.repository.model.sourceforge.Patch");
	}
	
	public static StringQueryProducer LOCATION = new StringQueryProducer("location"); 
	public static StringQueryProducer STATUS = new StringQueryProducer("status"); 
	
	
	
	
	
	
}