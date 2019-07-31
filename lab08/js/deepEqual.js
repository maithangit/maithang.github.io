export default function deepEqual(elem1, elem2) {
    if(elem1 === elem2) {
        return true;
    }
    if(typeof elem1 == 'object' && typeof elem2 == 'object' && elem1 != null && elem2 != null) {
      if(Object.keys(elem1).length == Object.keys(elem2).length) {
          for(let key of Object.keys(elem1)) {
              if(elem2.hasOwnProperty(key) != true) {
                  return false;
              }
          }
          for(let key of Object.keys(elem1)) {
              if(typeof elem1[key] == 'object' && typeof elem2[key] == 'object' && typeof elem1[key] != null && typeof elem2[key] != null) {
                  return deepEqual(elem1[key], elem2[key]);
              }
              else {
                if(elem1[key] !== elem2[key]) {
                    return false;
                }
              }
          } 
          //else {
            return false;
          //}
        }
      }
    else {
        return false;
    }
    return true;
}