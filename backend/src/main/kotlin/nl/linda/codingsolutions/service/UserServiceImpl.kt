//package nl.linda.codingsolutions.service
//
//import nl.linda.codingsolutions.repository.UserRepository
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.stereotype.Service
//
//@Service
//class UserServiceImpl(@Autowired val userRepo: UserRepository) : UserService {
//    override fun save(user: User) {
//        userRepo.save(user)
//    }
//
//    override fun findByUserId(userId: String): User {
//        return userRepo.findByUserId(userId)
//    }
//}