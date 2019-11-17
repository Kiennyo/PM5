package lt.sikutis.pm5be.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "organizations", schema = "dbo")
public class Organizations {

    @Id
    private long org;
    private float lat;
    private float lon;
    private String org_name;
    private String org_address;

    public Organizations() {

    }

    public Organizations(long org, float lat, float lon, String org_name, String org_address) {
        this.org = org;
        this.lat = lat;
        this.lon = lon;
        this.org_name = org_name;
        this.org_address = org_address;
    }

    public long getOrg() {
        return org;
    }

    public void setOrg(long org) {
        this.org = org;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public float getLon() {
        return lon;
    }

    public void setLon(float lon) {
        this.lon = lon;
    }

    public String getOrg_name() {
        return org_name;
    }

    public void setOrg_name(String org_name) {
        this.org_name = org_name;
    }

    public String getOrg_address() {
        return org_address;
    }

    public void setOrg_address(String org_address) {
        this.org_address = org_address;
    }
}
