package util

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB
var err error

// InitDB initializes the database connection using DATABASE_URL
func InitDB() {
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL not set")
	}

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Error opening database: %v", err)
	}

	log.Println("✅ Successfully connected to the database.")
}

// GetDB returns the database connection
func GetDB() *gorm.DB {
	return DB
}
