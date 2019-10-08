package rest.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Arrays;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("penguins")
public class PenguinsService {
    List<String> penguins = Arrays.asList("Ozzie", "Zinger", "Dolo", "Pablo");
    @GET
    public List<String> getPenguins(){
        return penguins;
    }
}