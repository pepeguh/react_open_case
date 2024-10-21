import React from "react";
import './styles/home.css'
import './styles/case.css'
import { Link } from "react-router-dom";
const Home =()=>{
    return(
    
    <div className="home_main_div">
        <div className="home_grid_cases">
            <Link className="grid_case" to="/case/fracture">
                <div className=" ">
                  <img className="case_img case_scale" src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU2nfGaJG0btN2wwYHfxa-hY-uFxj4Dv50nj7uXpI7w3AewrhBpMWH6d9CLMlhpEbAe-Zk/256fx198f" alt="fracture"/>
                </div>
              <div className="case_price case_scale price_RUB">169</div>
              <div className="case_name">Fracture Case</div>
            </Link>

            <Link className="grid_case" to="/case/snakebite">
                <div className=" ">
                  <img className="case_img case_scale" src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naLOJzgUuYqyzIaIxa6jMOLXxGkHvcMjibmU99Sg3Qaw-hA_ZWrzLISLMlhpgJJUhGE/256fx198f" alt="fracture"/>
                </div>
              <div className="case_price case_scale price_RUB">139</div>
              <div className="case_name">Snakebite Case</div>
            </Link>

            <Link className="grid_case" to="/case/fracture">
                <div className=" ">
                  <img className="case_img case_scale" src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU1nfbOIj8W7oWzkYLdlPOsMOmIk2kGscAj2erE99Sn2AGw_0M4NW2hIYOLMlhpcmY0CRM/256fx198f" alt="fracture"/>
                </div>
              <div className="case_price case_scale price_RUB">219</div>
              <div className="case_name">Prism 2 Case</div>
            </Link>

            <Link className="grid_case" to="/case/snakebite">
                <div className=" ">
                  <img className="case_img case_scale" src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_19.982c3a44362ee65b192b359c12d3d3af9ecb56b2.png" alt="fracture"/>
                </div>
              <div className="case_price case_scale price_RUB">369</div>
              <div className="case_name">Clutch Case</div>
            </Link>

            <Link className="grid_case" to="/case/fracture">
                <div className=" ">
                  <img className="case_img case_scale" src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_17.8d4528eca229d65d0c19929ae2078aab38df1369.png" alt="fracture"/>
                </div>
              <div className="case_price case_scale price_RUB">169</div>
              <div className="case_name">Hydra Case</div>
            </Link>

            <Link className="grid_case" to="/case/snakebite">
                <div className=" ">
                  <img className="case_img case_scale" src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_15.7dfa18f8f7ce3bc4e55aac0c566fe068e741bddf.png" alt="fracture"/>
                </div>
              <div className="case_price case_scale price_RUB">119</div>
              <div className="case_name">Glove Case</div>
            </Link>

            <Link className="grid_case" to="/case/fracture">
                <div className=" ">
                  <img className="case_img case_scale" src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_13.9a7d2f757ddbdc915aa005def74ac186a457346a.png" alt="fracture"/>
                </div>
              <div className="case_price case_scale price_RUB">89</div>
              <div className="case_name">Gamma Case</div>
            </Link>

            <Link className="grid_case" to="/case/snakebite">
                <div className=" ">
                  <img className="case_img case_scale" src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_18.4255d9e03d5dad034bbe868622733deeb81434c1.png" alt="fracture"/>
                </div>
              <div className="case_price case_scale price_RUB">269</div>
              <div className="case_name">Spectrum 2 Case</div>
            </Link>
            
        </div>
    </div>
    );
};

export default Home;

