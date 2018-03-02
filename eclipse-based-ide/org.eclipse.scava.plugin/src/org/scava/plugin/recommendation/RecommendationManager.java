/*********************************************************************
* Copyright (c) 2017 FrontEndART Software Ltd.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

package org.scava.plugin.recommendation;

import java.util.List;

import org.scava.plugin.context.sourcecodestatus.SourceCodeStatusDetector;
import org.scava.plugin.context.sourcecodestatus.SourceCodeStatusException;
import org.scava.plugin.knowledgebase.access.KnowledgeBaseAccessManager;
import org.scava.plugin.recommendation.applier.RecommendationSetApplier;
import org.scava.commons.context.sourcecode.SourceCodeContext;
import org.scava.commons.library.Library;
import org.scava.commons.libraryapi.LibraryAPIElement;
import org.scava.commons.recommendation.RecommendationSet;
import org.scava.commons.transaction.APIUsageInContext;
import org.scava.commons.transaction.ParsedSourceCodeContext;
import org.scava.commons.transaction.UpdatableAPIUsage;
import org.eclipse.core.resources.IProject;
import org.eclipse.jdt.core.IJavaProject;

public class RecommendationManager implements ILibraryUpdateRecommendationProvider {
	private final KnowledgeBaseAccessManager knowledgeBaseAccessManager;
	
	public RecommendationManager(KnowledgeBaseAccessManager knowledgeBaseAccessManager) {
		this.knowledgeBaseAccessManager = knowledgeBaseAccessManager;
	}
	
	public void applyRecommendations(IProject project, RecommendationSet recommendations) {
		RecommendationSetApplier applier = new RecommendationSetApplier(project, recommendations);
		applier.apply();
	}
	
	/* (non-Javadoc)
	 * @see org.scava.plugin.recommendation.ILibraryUpdateRecommendationProvider#requestRecommendationsToUpdateLibraryInProject(org.eclipse.jdt.core.IJavaProject, org.scava.commons.library.Library, org.scava.commons.library.Library)
	 */
	@Override
	public RecommendationSet requestRecommendationsToUpdateLibraryInProject(IJavaProject project, Library updateFrom,
			Library updateTo) throws SourceCodeStatusException {
		List<LibraryAPIElement> apiElements = knowledgeBaseAccessManager.requestLibraryAPIChangesBetweenVersions(
				updateFrom, updateTo);
		
		List<APIUsageInContext> apiUsages = SourceCodeStatusDetector.findAPIUsagesInProject(project, apiElements);
		
		UpdatableAPIUsage updatableAPIUsage = new UpdatableAPIUsage(updateFrom, updateTo, apiUsages);
		
		RecommendationSet recommendationSet = knowledgeBaseAccessManager.requestRecommendationsToUpdateAPIUsage(
				updatableAPIUsage);
		return recommendationSet;
	}
	
	public RecommendationSet requestRecommendationsToGeneralImprovements(SourceCodeContext context) {
		ParsedSourceCodeContext parsedSourceCodeContext = new ParsedSourceCodeContext(context);
		RecommendationSet recommendationSet = knowledgeBaseAccessManager.requestRecommendationsToGeneralImprovements(
				parsedSourceCodeContext);
		
		return recommendationSet;
	}
}