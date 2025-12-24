"use client";

import { create } from "zustand";
import { SubsystemKey, SUBSYSTEM_COLORS } from "@/lib/motion";

interface SubsystemInfo {
  name: string;
  shortDesc: string;
  route: string;
}

export const SUBSYSTEM_INFO: Record<SubsystemKey, SubsystemInfo> = {
  ADCS: {
    name: "Attitude Determination and Controls Subsystem",
    shortDesc: "Reaction wheels, magnetorquers, IMU",
    route: "/subsystems/adcs",
  },
  EPS: {
    name: "Electrical and Power Subsystem",
    shortDesc: "Solar panels, MPPT, battery management",
    route: "/subsystems/eps",
  },
  OBC: {
    name: "On-Board Computing Subsystem",
    shortDesc: "SoC platform, TACOS OS",
    route: "/subsystems/obc",
  },
  TTC: {
    name: "Telemetry, Tracking & Command",
    shortDesc: "UHF transceiver, AX.25 protocol",
    route: "/subsystems/ttc",
  },
  STS: {
    name: "Structural and Thermal Subsystem",
    shortDesc: "Al 6061-T6 frame, MLI insulation",
    route: "/subsystems/sts",
  },
  PAYLOAD: {
    name: "Hyperspectral Imaging Payload",
    shortDesc: "32 bands, CCSDS compression",
    route: "/subsystems/payload",
  },
};

interface SubsystemState {
  hovered: SubsystemKey | null;
  selected: SubsystemKey | null;
  setHovered: (key: SubsystemKey | null) => void;
  setSelected: (key: SubsystemKey | null) => void;
  getColor: (key: SubsystemKey) => string;
  getInfo: (key: SubsystemKey) => SubsystemInfo;
}

export const useSubsystemState = create<SubsystemState>((set, get) => ({
  hovered: null,
  selected: null,
  setHovered: (key) => set({ hovered: key }),
  setSelected: (key) => set({ selected: key }),
  getColor: (key) => SUBSYSTEM_COLORS[key],
  getInfo: (key) => SUBSYSTEM_INFO[key],
}));
