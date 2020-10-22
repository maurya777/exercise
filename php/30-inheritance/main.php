
class Student extends person {
    private $testScores;
   
    /*	
    *   Class Constructor
    *   
    *   Parameters:
    *   firstName - A string denoting the Person's first name.
    *   lastName - A string denoting the Person's last name.
    *   id - An integer denoting the Person's ID number.
    *   scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    public function __construct($firstName, $lastName, $id, $scores) {
        parent::__construct($firstName, $lastName, $id);
        $this->testScores = $scores;
    }
    
    /*	
    *   Function Name: calculate
    *   Return: A character denoting the grade.
    */
    // Write your function here
    public function calculate(){
        $ret='';
        $total = 0;
        $m = count($this->testScores);
        for($i = 0; $i < $m; $i++){
            $total += $this->testScores[$i];
        }
        $a = $total/$m;
        if ($a > 89) {
            $ret = 'O';
        } else if ($a > 79) {
            $ret = 'E';
        } else if ($a > 69) {
            $ret = 'A';
        } else if ($a > 54) {
            $ret = 'P';
        } else if ($a > 39) {
            $ret = 'D';
        } else {
            $ret = 'T';
        }
        return $ret;
    }
}
