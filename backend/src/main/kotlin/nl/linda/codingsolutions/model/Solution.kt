package nl.linda.codingsolutions.model

import javax.persistence.*

@Entity
data class Solution(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long? = null,
        var title: String? = null,
        // description and solution may be Large Objects. Lob/ Clob streams the object instead of keeping the value in full-memory
        @Lob var description: String? = null,
        @Lob var solution: String? = null)