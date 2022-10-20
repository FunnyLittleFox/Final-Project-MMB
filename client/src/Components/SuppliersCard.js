////Info Card - User Option - marta 

function SuppliersCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../assets/Suppliers.png" />
        <Card.Body>
          <Card.Title>Suppliers</Card.Title>
          <Card.Text>
            All the time you would spend researching suppliers cut down in one place, just for you! find the best suppliers now!
          </Card.Text>
          <Button variant="primary">Access Suppliers</Button>
        </Card.Body>
      </Card>
    );
  }

  export default SuppliersCard;