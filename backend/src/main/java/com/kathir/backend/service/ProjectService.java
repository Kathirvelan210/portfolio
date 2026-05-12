package com.kathir.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kathir.backend.model.Project;
import com.kathir.backend.repository.ProjectRepository;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService (ProjectRepository projectRepository){
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(Long id){
        return projectRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Project Not Found Buddy"));
    }

    public Project saveProject(Project project){
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project updatedProject){
        Project existingProject=getProjectById(id);
        existingProject.setTitle(updatedProject.getTitle());
        existingProject.setDescription(updatedProject.getDescription());
        existingProject.setGithubLink(updatedProject.getGithubLink());
        existingProject.setLiveLink(updatedProject.getLiveLink());
        return projectRepository.save(existingProject);
    }

    public void deleteProject(Long id){
        projectRepository.deleteById(id);
    }
}
