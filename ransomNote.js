const canConstruct = (ransomNote, magazine) => {
    const ransomNoteArr = ransomNote.split('');
    const magazineArr = magazine.split('');

    for (let i = 0; i < ransomNoteArr.length; i++) {
        if (magazineArr.includes(ransomNoteArr[i])) {
            magazineArr.splice(magazineArr.indexOf(ransomNoteArr[i]), 1);
        } else {
            return false;
        }
    }
    
    return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('aa', 'aaab'));