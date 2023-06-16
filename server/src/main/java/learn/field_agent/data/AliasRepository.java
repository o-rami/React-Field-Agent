package learn.field_agent.data;

import learn.field_agent.models.Alias;

public interface AliasRepository {

    Alias findById(int aliasId);

    Alias add(Alias alias);

    boolean update(Alias alias);

    boolean deleteById(int alias);
}