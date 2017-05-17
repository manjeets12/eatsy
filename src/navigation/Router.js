
'use strict';


import {
  createRouter,
} from '@expo/ex-navigation';


import DiningTable from 'src/screens/diningTable';



export default createRouter(() => ({
  diningTable: () => DiningTable,
}), {
  ignoreSerializableWarnings: true,
});