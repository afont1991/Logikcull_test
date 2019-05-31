import React, { memo } from "react";

// Utils
import { albumConditionsFormatted } from "utils/albumConditionsUtility";

// Rebass components
import { Flex } from "rebass";

// Theme components
import Pill from "theme/components/Pill";

const ConditionCell = memo(({ condition }) => (
  <Flex flex="1" px="4" justifyContent="center" alignItems="center" >
    <Pill conditionKey={albumConditionsFormatted[condition].rank} >{albumConditionsFormatted[condition].formattedName}</Pill>
  </Flex>
));


export default ConditionCell;