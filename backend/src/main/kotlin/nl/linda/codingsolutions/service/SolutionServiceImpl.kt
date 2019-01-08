package nl.linda.codingsolutions.service

import nl.linda.codingsolutions.model.Solution
import nl.linda.codingsolutions.repository.SolutionRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class SolutionServiceImpl(@Autowired val solutionRepo: SolutionRepository) : SolutionService {

    override fun findAll(): MutableList<Solution> {
        return solutionRepo.findAll()
    }

    override fun findById(id: Long): Solution {
        return solutionRepo.findById(id).orElse(null)
    }

    override fun save(solution: Solution) {
        solutionRepo.save(solution)
    }

    override fun delete(id: Long) {
        solutionRepo.deleteById(id)
    }

}