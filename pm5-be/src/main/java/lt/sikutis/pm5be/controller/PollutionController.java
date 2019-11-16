package lt.sikutis.pm5be.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PollutionController {

    @GetMapping("/pollution")
    public String test() {
        return "{\"hello\":\"world\"}\n";
    }
}
