{/* <RangeInput
    value={10}
    onChange={}
    errorMessage={}
    // limitRange={{ min: 0, max: 100 }}
    // validate={() => {}}
/>


// state ? valid push : nothing

<div>
    <RangeInput onChange={} />
    <RangeInput />
</div> */}




// ---------------

// limit: { 100, 12000 }
// from: 
    // fromValue is not empty       ''              checkIsNotEmptyString(value)
    // fromValue is valid Number    'e2w'           checkIsValidNumber(value)
    // fromValue >= limit.min       90              checkNumberIsInRange(value, {min, max})
    // fromValue <= limit.max       12001

    // fromValue <= toValue         toValue === 150 checkGt(fromValue, toValue)



// ---------------