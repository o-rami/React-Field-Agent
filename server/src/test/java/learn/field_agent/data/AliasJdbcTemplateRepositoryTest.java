package learn.field_agent.data;

import learn.field_agent.models.Alias;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class AliasJdbcTemplateRepositoryTest {

    final static int NEXT_ALIAS_ID = 4;

    @Autowired
    AliasJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldAdd() {
        Alias alias = new Alias(0, "Bob", null, 1);

        Alias actual = repository.add(alias);

        assertNotNull(actual);
        assertEquals(NEXT_ALIAS_ID, actual.getAliasId());
    }

    @Test
    void shouldUpdate() {
        Alias alias = new Alias(1, "Nutmeg", "Mysterious, like eggnog", 1);

        assertTrue(repository.update(alias));

        Alias updated = repository.findById(1);

        assertEquals("Mysterious, like eggnog", updated.getPersona());
    }

    @Test
    void shouldNotUpdateMissing() {
        Alias alias = new Alias(99, "Name", null, 1);
        assertFalse(repository.update(alias));
    }

    @Test
    void shouldDeleteById() {
        assertTrue(repository.deleteById(3));
        assertFalse(repository.deleteById(3));
    }
}