//Write MyBook class
class MyBook extends Book
{
    private $price;
    
    function __construct($t, $a, $p) {
        parent::__construct($t, $a);
        $this->price = $p;
    }
    
    public function display(){
        echo "Title: " . $this->title;
        echo "Author: " . $this->author;
        echo "Price: " . $this->price;
    }
}