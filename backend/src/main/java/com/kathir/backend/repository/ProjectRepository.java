package com.kathir.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kathir.backend.model.Project;

public interface ProjectRepository extends JpaRepository<Project,Long> {
    
}
