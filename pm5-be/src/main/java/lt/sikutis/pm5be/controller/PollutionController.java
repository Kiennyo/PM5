package lt.sikutis.pm5be.controller;

import lt.sikutis.pm5be.model.PollutionData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class PollutionController {

    @GetMapping("/pollution")
    public ResponseEntity<Object> getData() {

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://airbox.edimaxcloud.com/devices_all?token=bbd61c7d-f2d7-4899-bd08-00a75e01abff&id=74DA38E69CBC&fbclid=IwAR1q3ejN3-dEzjFCsbnV9B8k2it2QPTdITYNiIOtysZ-nwI8Ccw54gqtnhc";

        String response = "test";
        PollutionData pd = new PollutionData(response);

        return new ResponseEntity<>(pd, HttpStatus.OK);
    }
}
