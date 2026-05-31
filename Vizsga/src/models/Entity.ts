
export type EntityId = string;

export interface IEntity {
    getId(): EntityId;
}

export function getNewEntityId(): EntityId {
    return crypto.randomUUID();
}