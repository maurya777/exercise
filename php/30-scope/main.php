// Write your code here
function __construct($es) {
    $this->elements = $es;
}

public function computeDifference() {
    $this->maximumDifference = abs(max($this->elements) - min($this->elements));
}