package learn.field_agent.data;

import learn.field_agent.models.SecurityClearance;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class SecurityClearanceJdbcTemplateRepositoryTest {

    @Autowired
    SecurityClearanceJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindSecurityClearances() {
        List<SecurityClearance> all = repository.findAll();

        assertNotNull(all);
        assertTrue(all.size() > 0);
        assertEquals("Secret", all.get(0).getName());
    }

    @Test
    void shouldFindById() {
        SecurityClearance secret = new SecurityClearance(1, "Secret");
        SecurityClearance topSecret = new SecurityClearance(2, "Top Secret");

        SecurityClearance actual = repository.findById(1);
        assertEquals(secret, actual);

        actual = repository.findById(2);
        assertEquals(topSecret, actual);

        actual = repository.findById(3);
        assertEquals(null, actual);
    }

    @Test
    void shouldFindTopSecret() {
        SecurityClearance expected = new SecurityClearance(2, "Top Secret");
        SecurityClearance actual = repository.findById(2);

        assertEquals(expected, actual);
    }

    @Test
    void shouldAddSecurityClearance() {
        SecurityClearance securityClearance = new SecurityClearance(0, "Confidential");

        SecurityClearance actual = repository.add(securityClearance);

        assertNotNull(actual);
        assertEquals(3, actual.getSecurityClearanceId());
    }

    @Test
    void shouldUpdateSecurityClearance() {
        SecurityClearance actual = new SecurityClearance(2, "Compartmented");
        assertTrue(repository.update(actual));
    }

    @Test
    void shouldNotUpdateMissingSecurityClearance() {
        SecurityClearance actual = new SecurityClearance(55, "Confidential");
        assertFalse(repository.update(actual));
    }

    @Test
    void shouldDeleteSecurityClearance() {
        assertTrue(repository.deleteById(2)); // (2,"Top Secret") not featured in test data, safe to X

        assertFalse(repository.deleteById(1)); // security clearance key is referenced, not safe to X
    }
}