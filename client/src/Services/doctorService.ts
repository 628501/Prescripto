import { doctors } from "../assets/assets_frontend/assets"

export const DoctorsFilter = (speciality: string) => {
    if (speciality) {
      return doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase());
    }
    return doctors;
  };
  