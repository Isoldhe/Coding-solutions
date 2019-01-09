package nl.linda.codingsolutions.controller

import org.springframework.web.bind.annotation.*

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport
import com.google.api.client.json.jackson2.JacksonFactory
import nl.linda.codingsolutions.model.Token
import java.io.IOException
import java.security.GeneralSecurityException
import java.util.*

@CrossOrigin(origins = ["http://localhost:4200"])
@RestController
class UserController {
    private val CLIENT_ID = "487556380216-vsv5i8od9ubeecdsb4tqun2t5g5i8tl1.apps.googleusercontent.com"

    private val webVerifier = GoogleIdTokenVerifier.Builder(NetHttpTransport(), JacksonFactory())
            .setAudience(Collections.singletonList(CLIENT_ID))
            .setIssuer("accounts.google.com")
            .build()

    @ResponseBody
    @RequestMapping(value = ["/google-sign-in"], method = [RequestMethod.POST], produces=["application/json"], consumes=["application/json"])
    fun googleSignIn(@RequestBody token: Token) {
        val googleToken: GoogleIdToken

        try {
            googleToken = webVerifier.verify(token.idToken)
            if (!token.idToken.isEmpty()) {
                val payload: Payload = googleToken.payload
                // print user identifier
                val userId: String = payload.subject
                println("user ID: $userId")
                // Get profile information from payload
                val email: String = payload.email
                val emailVerified: Boolean = payload.emailVerified
                val name: String = payload["name"] as String
                println("user name: $name")
                val pictureURL: String = payload["picture"] as String
                println("pictureURL: $pictureURL")
                val locale: String = payload["locale"] as String
                println("locale: $locale")
                val familyName: String = payload["family_name"] as String
                println("familyName: $familyName")
                val givenName: String = payload["given_name"] as String
                println("givenName: $givenName")
            } else {
                println("Invalid ID token.")
            }
        } catch (gse: GeneralSecurityException) {
            println("GeneralSecurityException")
            gse.printStackTrace()
        } catch (ioe: IOException) {
            println("IOException")
            ioe.printStackTrace()
        }
    }
}