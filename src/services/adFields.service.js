import axios from "axios";

export default {
  getBrands() {
    return axios.get("brand_cars").then((response) => response.data.data.items);
  },
  getField(payload) {
    let query = `brand_cars/${payload.brandId}/model_cars`;

    if (payload.model) query += `/${payload.model}/version_frances`;

    if (payload.year) query += `?year=${payload.year}`;

    if (payload.fuel) query += `&fuel=${payload.fuel}`;

    if (payload.powerCv) query += `&power_cv=${payload.powerCv}`;

    if (payload.gearbox) query += `&gearbox=${payload.gearbox}`;

    return axios.get(query).then((response) => response.data.data);
  },
  createAd(payload) {
    const vehicle = {
      model_car_id: payload.model,
      gearbox: payload.gearbox,
      vehicle_first_traffic_year: payload.year
    };
    return axios
      .post("owner_vehicles", vehicle)
      .then((response) => response.data.data);
  },
};
