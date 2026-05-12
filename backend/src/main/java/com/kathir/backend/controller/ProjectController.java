package com.kathir.backend.controller;
import com.kathir.backend.service.ProjectService;
import com.kathir.backend.model.Project;
import jakarta.validation.Valid;
import com.kathir.backend.dto.ProjectDTO;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/projects")
@CrossOrigin("*")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService){
        this.projectService=projectService;
    }

    @GetMapping
    public List<Project> getAllProjects(){
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id){
        return projectService.getProjectById(id); 
    }
    
    @PostMapping
    public Project createProject(@Valid @RequestBody ProjectDTO projectDTO){
        Project project=new Project();
        project.setTitle(projectDTO.getTitle());
        project.setDescription(projectDTO.getDescription());
        project.setGithubLink(projectDTO.getGithubLink());
        project.setLiveLink(projectDTO.getLiveLink());
        return projectService.saveProject(project);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id,@Valid @RequestBody ProjectDTO projectDTO){
        Project project=new Project();
        project.setTitle(projectDTO.getTitle());
        project.setDescription(projectDTO.getDescription());
        project.setGithubLink(projectDTO.getGithubLink());
        project.setLiveLink(projectDTO.getLiveLink());
        return projectService.updateProject(id, project);
    }

    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable Long id){
        projectService.deleteProject(id);
        return "Project Deleted Successfully Buddy" ;
    }
    
}
