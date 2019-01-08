package nl.linda.codingsolutions.repository

import nl.linda.codingsolutions.model.Solution
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SolutionRepository : JpaRepository<Solution, Long> {
}