package nl.linda.codingsolutions.service

import nl.linda.codingsolutions.model.Solution

interface SolutionService {
    fun findAll(): List<Solution>
    fun findById(id: Long): Solution
    fun save(solution: Solution)
    fun delete(id: Long)
}