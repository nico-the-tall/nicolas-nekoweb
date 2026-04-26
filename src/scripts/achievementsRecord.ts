import {
  ACHIEVEMENT_UNLOCKED,
  achievements,
  ACHIEVEMENTS_RECORD,
} from "../constants/achievements";

export function initializeRecord(force?: boolean) {
  const achievementsRecord = localStorage.getItem(ACHIEVEMENTS_RECORD);

  if (!achievementsRecord || force) {
    const initializedAchievements = achievements.reduce<Record<string, number>>(
      (acc, { id }) => {
        acc[id] = 0;
        return acc;
      },
      {},
    );

    localStorage.setItem(
      ACHIEVEMENTS_RECORD,
      JSON.stringify(initializedAchievements),
    );
  }
}

function readStorage() {
  const achievementsRecordString = localStorage.getItem(ACHIEVEMENTS_RECORD);

  if (!achievementsRecordString) {
    throw new Error("Achievements record is not initialized.");
  }

  const achievementsRecord = JSON.parse(achievementsRecordString) as Record<
    string,
    number
  >;
  return achievementsRecord;
}

export function getRecord(id: string) {
  return readStorage()[id];
}

export function setRecord(id: string, value: number) {
  const achievementsRecord = readStorage();

  if (!achievementsRecord) {
    throw new Error("Achievements record is not initialized.");
  }

  achievementsRecord[id] = value;
  localStorage.setItem(ACHIEVEMENTS_RECORD, JSON.stringify(achievementsRecord));

  window.dispatchEvent(
    new CustomEvent(ACHIEVEMENT_UNLOCKED, {
      detail: {
        id,
        value,
      },
    }),
  );
}
