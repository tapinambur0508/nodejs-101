function parseNumber(maybeNumber) {
  if (typeof maybeNumber !== 'string') {
    return undefined;
  }

  const parsedNumber = parseInt(maybeNumber);

  if (Number.isNaN(parsedNumber)) {
    return undefined;
  }

  return parsedNumber;
}

function parseFilterParams(query) {
  const { minYear, maxYear } = query;

  const parsedMinYear = parseNumber(minYear);
  const parsedMaxYear = parseNumber(maxYear);

  return {
    minYear: parsedMinYear,
    maxYear: parsedMaxYear,
  };
}

export { parseFilterParams };
