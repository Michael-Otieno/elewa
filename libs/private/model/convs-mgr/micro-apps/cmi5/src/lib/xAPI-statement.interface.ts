import { Actor } from "./actor.interface";
import { ContextActivities } from "./context-template.interface";

export interface xAPIStatement 
{
  id: string;
  actor: Actor;
  verb: {
    id: string;
    display: {
      [key: string]: string;
    }
  }

  object: {
    id: string;
    objectType: string;

    definition: {
      name: {
        [key: string]: string;
        },
        description: {
          [key: string]: string;
          }
      } 
  }

  result: { 
    
    score: {
      scaled: number;
      raw: number;
      min: number;
      max: number;
    };

    success: boolean;
    completion: boolean;
    response: string;
    duration: string;
  }

  context: {
    registration: string;
    contextActivities: ContextActivities;
  }

  extensions: {
    [key: string]: any;
  }
}