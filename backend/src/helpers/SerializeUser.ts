import Queue from "../models/Queue";
import User from "../models/User";
import Whatsapp from "../models/Whatsapp";

interface SerializedUser {
  id: number;
  name: string;
  email: string;
  profile: string;
  queues: Queue[];
  whatsapp: Whatsapp;
  // Inicio do codigo Automatic Transfer
  ramal: string;
  // Fim do codigo Automatic Transfer
}

export const SerializeUser = (user: User): SerializedUser => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    profile: user.profile,
    queues: user.queues,
    whatsapp: user.whatsapp,
    // Inicio do codigo Automatic Transfer
    ramal: user.ramal
    // Fim do codigo Automatic Transfer
  };
};
