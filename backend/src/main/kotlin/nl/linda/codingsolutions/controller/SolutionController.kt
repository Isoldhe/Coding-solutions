package nl.linda.codingsolutions.controller

import nl.linda.codingsolutions.model.Solution
import nl.linda.codingsolutions.service.SolutionServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:4200"])
@RestController
class SolutionController(@Autowired val solutionService: SolutionServiceImpl) {
    init {
        // adding demo data
        saveSolution(Solution(title = "Creating the backend", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae vestibulum enim, at bibendum ex. Ut condimentum turpis a enim dignissim vehicula. Fusce at varius nibh, ac tempor augue. Sed ipsum lectus, tempor non lobortis et, scelerisque quis risus. Cras hendrerit volutpat elit sit amet vestibulum. Donec id pulvinar justo. Nulla convallis nec elit non facilisis.", solution = "Vestibulum accumsan ornare vestibulum. Nunc vestibulum laoreet massa non auctor. Maecenas vitae luctus ante. Sed ut lectus sed nibh euismod faucibus a scelerisque velit. Sed pulvinar efficitur metus. Mauris eleifend dui ligula, et pellentesque velit tempus vitae. Donec vel fringilla libero, sed pulvinar tellus. Donec id tincidunt augue. Praesent sit amet risus id dui maximus dictum a at ipsum. Pellentesque eu velit leo."))
        saveSolution(Solution(title = "Do frontend with Angular", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae vestibulum enim, at bibendum ex. Ut condimentum turpis a enim dignissim vehicula. Fusce at varius nibh, ac tempor augue. Sed ipsum lectus, tempor non lobortis et, scelerisque quis risus. Cras hendrerit volutpat elit sit amet vestibulum. Donec id pulvinar justo. Nulla convallis nec elit non facilisis.", solution = "Vestibulum accumsan ornare vestibulum. Nunc vestibulum laoreet massa non auctor. Maecenas vitae luctus ante. Sed ut lectus sed nibh euismod faucibus a scelerisque velit. Sed pulvinar efficitur metus. Mauris eleifend dui ligula, et pellentesque velit tempus vitae. Donec vel fringilla libero, sed pulvinar tellus. Donec id tincidunt augue. Praesent sit amet risus id dui maximus dictum a at ipsum. Pellentesque eu velit leo."))
        saveSolution(Solution(title = "Connect back- and frontend", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae vestibulum enim, at bibendum ex. Ut condimentum turpis a enim dignissim vehicula. Fusce at varius nibh, ac tempor augue. Sed ipsum lectus, tempor non lobortis et, scelerisque quis risus. Cras hendrerit volutpat elit sit amet vestibulum. Donec id pulvinar justo. Nulla convallis nec elit non facilisis.", solution = "Vestibulum accumsan ornare vestibulum. Nunc vestibulum laoreet massa non auctor. Maecenas vitae luctus ante. Sed ut lectus sed nibh euismod faucibus a scelerisque velit. Sed pulvinar efficitur metus. Mauris eleifend dui ligula, et pellentesque velit tempus vitae. Donec vel fringilla libero, sed pulvinar tellus. Donec id tincidunt augue. Praesent sit amet risus id dui maximus dictum a at ipsum. Pellentesque eu velit leo."))
        saveSolution(Solution(title = "Get more coffee", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae vestibulum enim, at bibendum ex. Ut condimentum turpis a enim dignissim vehicula. Fusce at varius nibh, ac tempor augue. Sed ipsum lectus, tempor non lobortis et, scelerisque quis risus. Cras hendrerit volutpat elit sit amet vestibulum. Donec id pulvinar justo. Nulla convallis nec elit non facilisis.", solution = "Vestibulum accumsan ornare vestibulum. Nunc vestibulum laoreet massa non auctor. Maecenas vitae luctus ante. Sed ut lectus sed nibh euismod faucibus a scelerisque velit. Sed pulvinar efficitur metus. Mauris eleifend dui ligula, et pellentesque velit tempus vitae. Donec vel fringilla libero, sed pulvinar tellus. Donec id tincidunt augue. Praesent sit amet risus id dui maximus dictum a at ipsum. Pellentesque eu velit leo."))

        println(findAllSolutions())
    }

    var solutions: MutableList<Solution> = mutableListOf()

    @ResponseBody
    @GetMapping(value = ["/test"])
    fun testCall(@RequestBody idToken: Any) : String {
        println("Doing the testCall()")
        return "Hello from the backend"
    }

    @ResponseBody
    @GetMapping(value = ["/all-solutions"])
    final fun findAllSolutions() : MutableList<Solution> {
        return solutionService.findAll()
        // TODO: set it to solutions var?
    }

    @ResponseBody
    @GetMapping(value = ["/solution-detail/{id}"])
    fun findSolutionById(@PathVariable id: Long) : Solution {
        val solution: Solution = solutionService.findById(id)

        // if present return solution, else return empty solution
        return if (solution.id != null) solution else Solution()
    }

    @ResponseBody
    @PostMapping(value = ["/solution"])
    final fun saveSolution(@RequestBody solution: Solution) {
        solutionService.save(solution)
    }

    @ResponseBody
    @PutMapping(value = ["/solution/{id}"])
    fun updateSolution(@PathVariable id: Long, @RequestBody solution: Solution) {
        println("doing updateSolution()")
        solutionService.save(solution)
    }

    @ResponseBody
    @DeleteMapping(value = ["/solution/{id}"])
    fun deleteSolution(@PathVariable id: Long) {
        solutionService.delete(id)
    }
}