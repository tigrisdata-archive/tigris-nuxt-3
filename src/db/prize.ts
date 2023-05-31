import {
  Field,
  TigrisCollection,
  PrimaryKey,
  TigrisDataTypes,
} from "@tigrisdata/core";

export class Laureate {
  @Field(TigrisDataTypes.STRING)
  firstname!: string;

  @Field(TigrisDataTypes.STRING)
  id!: string;

  @Field(TigrisDataTypes.STRING)
  motivation!: string;

  @Field(TigrisDataTypes.STRING)
  share!: string;

  @Field(TigrisDataTypes.STRING)
  surname!: string;
}

@TigrisCollection("prizes")
export class Prize {
  @PrimaryKey(TigrisDataTypes.UUID, { order: 1, autoGenerate: true })
  id?: string;

  @Field(TigrisDataTypes.STRING)
  category!: string;

  @Field(TigrisDataTypes.ARRAY, { elements: Laureate })
  laureates!: Array<Laureate>;

  @Field(TigrisDataTypes.STRING)
  overallMotivation!: string;

  @Field(TigrisDataTypes.NUMBER, { index: true })
  year!: number;
}
