package learn.field_agent.data;

import learn.field_agent.data.mappers.SecurityClearanceMapper;
import learn.field_agent.models.SecurityClearance;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class SecurityClearanceJdbcTemplateRepository implements SecurityClearanceRepository {

    private final JdbcTemplate jdbcTemplate;

    public SecurityClearanceJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<SecurityClearance> findAll() {
        final String sql = "select security_clearance_id, name security_clearance_name "
                + "from security_clearance;";
        return jdbcTemplate.query(sql, new SecurityClearanceMapper());
    }

    @Override
    public SecurityClearance findById(int securityClearanceId) {

        final String sql = "select security_clearance_id, name security_clearance_name "
                + "from security_clearance "
                + "where security_clearance_id = ?;";

        return jdbcTemplate.query(sql, new SecurityClearanceMapper(), securityClearanceId)
                .stream()
                .findFirst().orElse(null);
    }

    @Override
    public SecurityClearance add(SecurityClearance securityClearance) {

        final String sql = "insert into security_clearance (name) "
            + "values (?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, securityClearance.getName());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        securityClearance.setSecurityClearanceId(keyHolder.getKey().intValue());
        return securityClearance;
    }

    @Override
    public boolean update(SecurityClearance securityClearance) {

        final String sql = "update security_clearance set "
                + "name = ? "
                + "where security_clearance_id = ?;";

        return jdbcTemplate.update(sql,
                securityClearance.getName(), securityClearance.getSecurityClearanceId()) > 0;
    }

    @Override
    public boolean deleteById(int securityClearanceId) {

        final String sql = "select "
                + "aa.agency_id, "
                + "aa.agent_id, "
                + "aa.identifier, "
                + "sc.security_clearance_id, "
                + "sc.name security_clearance_name "
                + "from security_clearance sc "
                + "inner join agency_agent aa on aa.security_clearance_id = sc.security_clearance_id "
                + "inner join agent ag on ag.agent_id = aa.agent_id "
                + "inner join agency ay on ay.agency_id = aa.agency_id "
                + "where sc.security_clearance_id = ?;";

        List<SecurityClearance> all = jdbcTemplate.query(sql, new SecurityClearanceMapper(), securityClearanceId);

        if (all.size() == 0) {
            return jdbcTemplate.update(
                    "delete from security_clearance where security_clearance_id= ?", securityClearanceId) > 0;
        }

        return false;
    }
}
