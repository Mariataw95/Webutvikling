import { ITeam } from "./ITeam";

export interface ITeamContext {
  teams: ITeam[];
  searchByManufacturerName: (manufacturer: string) => ITeam | null;
}
