package learn.field_agent.domain;

import learn.field_agent.data.SecurityClearanceRepository;
import learn.field_agent.models.SecurityClearance;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.mockito.Mockito.when;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class SecurityClearanceServiceTest {

    @Autowired
    SecurityClearanceService service;

    @MockBean
    SecurityClearanceRepository repository;

    @Test
    void shouldFindSecret() {
        SecurityClearance expected = makeSecurityClearance();

        when(repository.findById(1)).thenReturn(expected);

        SecurityClearance actual = service.findById(1);
        assertEquals(expected, actual);
    }

    @Test
    void shouldAdd() {
        SecurityClearance expected = makeSecurityClearance();
        SecurityClearance securityClearance = makeSecurityClearance();

        when(repository.add(securityClearance)).thenReturn(expected);

        Result<SecurityClearance> result = service.add(securityClearance);

        assertEquals(ResultType.SUCCESS, result.getType());
        assertEquals(expected, result.getPayload());
    }

    @Test
    void shouldNotAddWhenNull() {
        SecurityClearance securityClearance = makeSecurityClearance();
        securityClearance.setName(null);    // if null

        Result<SecurityClearance> actual = service.add(securityClearance);

        assertEquals(ResultType.INVALID, actual.getType());
        assertNull(actual.getPayload());
    }

    @Test
    void shouldNotAddWhenBlank() {
        SecurityClearance securityClearance = makeSecurityClearance();
        securityClearance.setName("");

        Result<SecurityClearance> actual = service.add(securityClearance);

        assertEquals(ResultType.INVALID, actual.getType());
        assertNull(actual.getPayload());
    }

    @Test
    void shouldUpdate() {
        SecurityClearance securityClearance = makeSecurityClearance();
        when(repository.update(securityClearance)).thenReturn(true);

        Result<SecurityClearance> actual = service.update(securityClearance);
        assertEquals(ResultType.SUCCESS, actual.getType());
    }

    @Test
    void shouldNotUpdateMissing() {
        SecurityClearance securityClearance = makeSecurityClearance();
        when(repository.update(securityClearance)).thenReturn(false);

        Result<SecurityClearance> actual = service.update(securityClearance);
        assertEquals(ResultType.NOT_FOUND, actual.getType());
    }

    SecurityClearance makeSecurityClearance() {
        SecurityClearance securityClearance = new SecurityClearance();
        securityClearance.setSecurityClearanceId(3);
        securityClearance.setName("Confidential");
        return securityClearance;
    }
}